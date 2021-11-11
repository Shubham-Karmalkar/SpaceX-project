import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate,setCurrentDate] = useState(new Date());

const createData = (value)=>{
    const missionName = value.mission_name ;
    const site_name = value.launch_site.site_name;
    let date = Date.parse(value.launch_date_local);
    date = date  + 31536000000;
    date = new Date(date);
    console.log("currentdate",new Date(data.mission_date).getTime());
    console.log("modulo",Math.floor((266410/(24*60*60)*24*60-Math.floor(266410/(24*60*60))*24*60))%60);
    
    setData({mission_Name : missionName,
        siteName : site_name,
        mission_date : date.toUTCString()} );

        console.log('daate', Date.parse(data.mission_date))
}
setInterval(()=>{
    setCurrentDate(new Date());
},1000)
    

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/next")
      .then((req) => {
        if (!req.ok) {
          throw Error("Unexpected Error Occured");
        }
        return req.json();
      })
      .then((value) => {
        setIsLoading(false);
        createData(value);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });
 
  }, []);

  return (
    <div className={styles.homeContainer}>
      {isLoading ? (
        <div className={styles.loading}>Loading....</div>
      ) : isError ? (
        <div className={styles.loading}>{isError}</div>
      ) : (
        <div className={styles.dataContainer}>
          <table>
            <thead>
              <tr>
                <th className={styles.tdata}>Mission Name</th>
                <th className={styles.tdata}>Date</th>
                <th className={styles.tdata}>Launch Pad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tdata}>{data.mission_Name}</td>
                <td className={styles.tdata}>{data.mission_date}</td>
                <td className={styles.tdata}>{data.siteName}</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.counter}>
            <div className={styles.days + " " + styles.time}>
              <span>Days</span>
              <div>
                {Math.floor(
                  Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                    Date.parse(currentDate) / (1000 * 60 * 60 * 24)
                )}
              </div>
            </div>

            <div className={styles.hours + " " + styles.time}>
              <span>Hours</span>
              <div>
                {Math.floor(
                  (Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                    Date.parse(currentDate) / (1000 * 60 * 60 * 24)) *
                    24 -
                    Math.floor(
                      Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                        Date.parse(currentDate) / (1000 * 60 * 60 * 24)
                    ) *
                      24
                )}
              </div>
            </div>

            <div className={styles.minutes + " " + styles.time}>
              <span>Minutes</span>
              <div>
                {Math.floor(
                  (Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                    Date.parse(currentDate) / (1000 * 60 * 60 * 24)) *
                    24 *
                    60 -
                    Math.floor(
                      Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                        Date.parse(currentDate) / (1000 * 60 * 60 * 24)
                    ) *
                      24 *
                      60
                ) % 60}
              </div>
            </div>

            <div className={styles.seconds + " " + styles.time}>
              <span>Seconds</span>
              <div>
                {Math.floor(
                  (Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                    Date.parse(currentDate) / (1000 * 60 * 60 * 24)) *
                    24 *
                    60 *
                    60 -
                    Math.floor(
                      Date.parse(data.mission_date) / (1000 * 60 * 60 * 24) -
                        Date.parse(currentDate) / (1000 * 60 * 60 * 24)
                    ) *
                      24 *
                      60 *
                      60
                ) % 60}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
