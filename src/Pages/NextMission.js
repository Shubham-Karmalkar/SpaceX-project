import { useState, useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import styles from './NextMission.module.css' ;


const NextMission = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [heart,setHeart]  = useState(null);
  const [star,setStar] = useState(null);

  useEffect((star)=>{
      if(!star){
          return ;
      }
    //   const obj = JSON.parse(localStorage.getItem(['userInfo']));
    //   console.log('obj',obj);
    console.log('local',localStorage.getItem(['userInfo']));
    // console.log('heart',star);
  },[star])

  const  handleClick = (ele,index)=>{
    // console.log(ele.target.className)
    if(ele.target.className == 'fas fa-star'){
        if(star[index]==false){
            const arr = [...star] ;
            arr[index] = true ;
            setStar(arr);
            // console.log('arr',arr);
            // console.log('star',star);
            
        }else{
            const arr = [...star];
            arr[index] = false ;
            setStar(arr);   
        }
    }
    else if (ele.target.className == "fas fa-heart") {
        if(heart[index]==false){
            const arr = [...heart];
            arr[index] = true;
            setHeart(arr);
        }else{
             const arr = [...heart];
             arr[index] = false;
             setHeart(arr);   
        }
        console.log(heart);
    }
  }


  function setIcons(value){
      if(!localStorage.getItem('userInfo')){
        const arr = [];
        for (let i = 0; i < value.length; i++) {
          arr.push(false);
        }
        setStar(arr);
        setHeart(arr);
        const obj = ((star,heart)=>{
           return{ star : arr,
            heart : arr
           }
        })() ;
        localStorage.setItem('userInfo',JSON.stringify(obj));
        console.log(localStorage.getItem(['userInfo']));
      }else{
        //   setStar(localStorage.getItem['userInfo'].star);
        setStar(localStorage.getItem(['userInfo']).star);
        setHeart(localStorage.getItem(["userInfo"]).heart);
      }
    
    // console.log('star',star);
  }


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
        setIcons(value);
        
        
        
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
              {data != null ? data.map((ele,index)=>{
                        return (
                          <tr key={index} className={index} >
                            <td>{ele.mission_name}</td>
                            <td>{ele.launch_date_local}</td>
                            <td>{ele.launch_site.site_name}</td>
                            <td className={styles.icons}>
                              <i id={star &&  star[index] ? styles.star: '' }
                                onClick={(e)=>handleClick(e,index)}
                                className="fas fa-star"
                                
                              ></i>
                              <i id={heart && heart[index] ? styles.heart : ''}
                                onClick={(e)=>handleClick(e,index)}
                                className="fas fa-heart"
                              ></i>
                            </td>
                          </tr>
                        );
                    }): <tr></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NextMission;
