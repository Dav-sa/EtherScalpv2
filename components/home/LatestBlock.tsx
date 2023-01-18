import Card from "./card"
import { ReactNode, useEffect, useState } from "react";
import { alchemy } from "../alchemy/alchemy";
import ethereum from "../../public/ethereum.png"
import Image from "next/image";


export const LatestBlock  = () => {
    const [blockNumber, setBlockNumber] = useState(0);

    useEffect(() => {
      async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
      }
  
      getBlockNumber();
    });
    const title="Latest Block";
    const description="The latest block on the Ethereum network";
    const demo=<><div className="my-2">{blockNumber}</div>
    <Image width="40" height="40" alt="ethereum logo" src={ethereum}></Image></>;
    const large=true;

  return (
    <Card title={title}
    description={description}
    demo={demo}
    large={large}
    ></Card>
  )
}