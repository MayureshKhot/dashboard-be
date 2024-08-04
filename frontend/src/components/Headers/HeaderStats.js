import React, { useEffect, useState } from "react";
import CardStats from "components/Cards/CardStats.js"; // Ensure the correct path to CardStats component
import { makeGetRequest } from "service/apiService";

export default function HeaderStats() {
  const [traffic, setTraffic] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [sales, setSales] = useState(0);

  useEffect(() => {
    const fetchTraffic = async () => {
      try {
        const response = await makeGetRequest('/pri/requestCounts');
        setTraffic(response.count);
      } catch (error) {
        console.error("Error fetching traffic data", error);
      }
    };

    const fetchNewUsers = async () => {
      try {
        const response = await makeGetRequest('/pri/userCounts');
        setNewUsers(response.count);
      } catch (error) {
        console.error("Error fetching new users data", error);
      }
    };

    const fetchSales = async () => {
      try {
        const response = await makeGetRequest('/pri/totalEarnings');
        setSales(response.totalEarnings);
      } catch (error) {
        console.error("Error fetching sales data", error);
      }
    };

    fetchTraffic();
    fetchNewUsers();
    fetchSales();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle={traffic.toString()}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle={newUsers.toString()}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle={`₹ ${sales.toFixed(2)}`}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
