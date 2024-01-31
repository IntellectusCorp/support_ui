'use client'
import { useCallback, useEffect, useMemo, useState } from "react";
import Queue from "../utils/queueClass";
import GraphSection from "./GraphSection";
import InputAnimation from "./InputAnimation";
import OutputAnimation from "./OutputAnimation";
import styles from './index.module.css';

type T = Array<unknown>
const queue = new Queue<T>();

export interface ThroughputProps {
  maxLength: number;
  inputData: T;
  graphWidth: number;
  graphHeight: number;
  color?: string;
}
const Throughput = ({
  maxLength,
  inputData,
  graphWidth,
  graphHeight,
  color = '#4682b4'
}: ThroughputProps) => {
  const [queueData, setQueueData] = useState<Array<T>>([]);
  const [outputData, setOutputData] = useState<T>([]);
  const reducedQueueData = useMemo(() => {
    return queueData.reduce((prev, item) => prev + item.length, 0) / maxLength
  }, [queueData, maxLength]);

  const dynamicBarContainerStyle = useMemo(() => {
    return {
      width: graphWidth,
      height: graphHeight,
    };
  }, [graphWidth, graphHeight]);

  // MARK: Functions
  const handleQueue = useCallback(
    (data: T) => {
      queue.enqueue(data);

      if (queue.length > maxLength) {
        return queue.dequeue();
      }

      return [];
    },
    [maxLength]
  );

  const inputDataChangeCallback = useCallback(
    (data: T) => {
      if (data.length === 0) {
        return;
      }
      setOutputData(handleQueue(data));
      setQueueData([...queue.queue]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputData]
  );

  // MARK: useEffect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => inputDataChangeCallback(inputData), [inputData]);

  return (
    <div className={styles.page_container}>
      <InputAnimation data={inputData} height={graphHeight} />
      <div className={styles.bar_container} style={dynamicBarContainerStyle} >
        <div className={styles.bar_inner_container}>
          <div className={styles.graph_wrapper}>
              <GraphSection
                key={`throughput-graph-section`}
                backgroundColor={color}
                maxWidth={graphWidth}
                percentage={
                  reducedQueueData /
                  60
                }
              />
              <p className={styles.lack_count_text}>{reducedQueueData}</p>
          </div>
        </div>
      </div>
      <OutputAnimation data={outputData} height={graphHeight} />
    </div>
  );
};

export default Throughput;
