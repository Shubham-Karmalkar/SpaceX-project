import { useState, useEffect } from "react";
import styles from './Favourites.module.css';

const Favourites = ()=>{
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [localData, setLocalData] = useState(null);

    useEffect(() => {
      setLocalData(JSON.parse(localStorage.getItem(["userInfo"])));
      console.log("localdata", localData);
    }, []);

    useEffect(() => {
      fetch("https://api.spacexdata.com/v3/launches/upcoming")
        .then((req) => {
          if (!req.ok) {
            throw Error("Unexpected Error Occured");
          }
          return req.json();
        })
        .then((value) => {
          setIsLoading(false);
          setData(value);
        })
        .catch((error) => {
          setIsError(error.message);
          setIsLoading(false);
        });
    }, []);

    return (
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loading}>Loading....</div>
        ) : isError ? (
          <div className={styles.loading}>{isError}</div>
        ) : (
          <div className={styles.missionData}>
            <table>
              <thead>
                <tr>
                  <th>Mission Name{console.log(data)}</th>
                  <th>Date</th>
                  <th>LaunchPad</th>
                </tr>
              </thead>
              <tbody>
                {data && localData ? (
                  data
                    .filter((ele, index) => {
                      //   console.log(localData.star[index]);
                      return localData.heart[index];
                    })
                    .map((ele, index) => {
                      return (
                        <tr key={index} className={index}>
                          <td>{ele.mission_name}</td>
                          <td>{ele.launch_date_local}</td>
                          <td>{ele.launch_site.site_name}</td>
                        </tr>
                      );
                    })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}

export default Favourites ;