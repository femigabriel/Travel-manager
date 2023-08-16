import React, { useState } from "react";
import { Product } from "../../../interfaces";
import { AddNewClients } from "./AddNewClients";
import { useProductContext } from "@/context/PageContext";
import { ResponseFetchUsers } from "@/services/Services";
import Link from "next/link";
import clients from "@/pages/clients";

// interface IProps {
//   product: Product;
// }
export const ClientTable = () => {
  const [data, setData] = useState<ResponseFetchUsers[]>([]);
  console.log(data);

  const addToData = (data: ResponseFetchUsers) => {
    setData((x) => [...x, data]);
  };
  // const { products } = useProductContext();
  if (data.length === 0)
    return (
      <div className="my-10 px-10 ">
        <div className="p-5 bg-white">
          <h3 className="text-center text-gray-400 p-5">
            No clients Added Yet!
          </h3>
          <AddNewClients successCallBack={addToData} />
          <div className="w-full  px-3 py-4 mb-5 grid grid-cols-4 rounded-[8px] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#c3ad2e] bg-red-100 font-semibold text-[14px]">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span> Residential Address</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="my-10 px-10 ">
      <div className="p-5 bg-white">
        <AddNewClients successCallBack={addToData} />
        <div className="w-full  px-3 py-4 mb-5 grid grid-cols-4 rounded-[8px] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#c3ad2e] bg-red-100 font-semibold text-[14px]">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span> Residential Address</span>
        </div>
        <div className="flex flex-wrap gap-3 ">
          <div className=" w-full client-table rounded-md h-full">
            <div className=" cursor-pointer text-[12px] font-semibold">
              {data?.map((list, index) => (
                <Link
                  href={`/clients/${list.slug}`}
                  key={index}
                  className="grid grid-cols-4 list text-[#888] border border-x-0 border-t-0 border-[#f5f5f5] "
                >
                  <span className="my-4">{list.name}</span>
                  <span className="my-4">{list.email}</span>
                  <span className="my-4">{list.phone}</span>
                  <span className="w-[20em] my-4">{list.address}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
