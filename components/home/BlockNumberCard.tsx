import Card from "./card";
import { ReactNode, useEffect, useState } from "react";
import { alchemy } from "../alchemy/alchemy";
import ethereum from "../../public/ethereum.png";
import Image from "next/image";

type BlockNumberCardProps = {
  blockNumber: number;
};

export const BlockNumberCard = ({ blockNumber }: BlockNumberCardProps) => {
  const [blockInfo, setBlockInfo] = useState({});
  useEffect(() => {
    async function getBlockInfo() {
      setBlockInfo(await alchemy.core.getBlock(blockNumber));
    }
    getBlockInfo();
  }, [blockNumber]);
  const title = `About Block ${blockNumber}`;
  const description = `Details about block ${blockNumber}`;
  const demo = (
    <>
      <div className="my-.5 flex w-full flex-col truncate text-center">
        <div className="text-lg">Block hash :</div>
        <div className="">{blockInfo ? blockInfo.hash : null}</div>
      </div>
      <div className="my-.5 flex w-full flex-col truncate text-center">
        <div className="text-lg">Block parent hash</div>
        <div className="">{blockInfo ? blockInfo.parentHash : null}</div>
      </div>
      <div className="w-full truncate text-center">
        <div className="text-lg">No of transactions :</div>
        <div>
          {blockInfo.transactions ? blockInfo.transactions.length : null}
        </div>
      </div>
    </>
  );
  const large = true;

  return (
    <>
      {blockInfo ? (
        <Card
          title={title}
          description={description}
          demo={demo}
          large={large}
        ></Card>
      ) : null}
    </>
  );
};
