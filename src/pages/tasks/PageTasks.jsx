// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import cls from "../tasks/PageTasks.module.scss";

// export const PageTasks = () => {
//     const [data, setData] = useState([]);

//   const pagesCount = Math.ceil(data.total / data.per_page);
//   const pages = [];
//   console.log("pages", pages)
//   for (let i = 0; i <= pagesCount; i += 1) {
//     pages.push(i + 1)
//   }

//     useEffect(() => {
//       axios
//         .get(`http://localhost:5000/api/v1/tasks`)
//         .then((res) => {
//           console.log(res.data);
//           setData(res.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);

//   const onClick = (pageNumber) => {
//     setData({ ...data, current_page: pageNumber});
//   };

//   return (
//     <div className={cls.pages}>
//       {pages.map((page) => {
//         return (
//           <button
//             type="button"
//             key={page}
//             className={data.current_page === page ? `${cls.current_page}` : `${cls.page}`}
//             onClick={() => onClick(page)}
//           >
//             {page}
//           </button>
//         );
//       })}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegClock } from "react-icons/fa";
import cls from "../tasks/PageTasks.module.scss";

export const PageTasks = () => {
  const [data, setData] = useState({});

   let tasks = [
     {
       Users_id: 1,
       name: "Alex Kendal",
       Price: "1.40",
       Description: "Зарегистрироваться на сайте",
       URL: "",
       icon: <FaRegClock />,
       Timer: 20,
       id: 11,
     },
     {
       Users_id: 2,
       name: "Misha Kolins",
       Price: "2.23",
       Description: "Поставить лайк и оставить коментарии",
       URL: "",
       icon: <FaRegClock />,
       Timer: 10,
       id: 12,
     },
     {
       Users_id: 3,
       name: "Jensen Ackels",
       Price: "0.99",
       Description: "Зарегистрироваться на сайте",
       URL: "",
       icon: <FaRegClock />,
       Timer: 20,
       id: 13,
     },
     {
       Users_id: 4,
       name: "Sasha Gray",
       Price: "1.59",
       Description: "Поставить лайк и оставить коментарии",
       URL: "",
       icon: <FaRegClock />,
       Timer: 10,
       id: 14,
     },
     {
       Users_id: 5,
       name: "Jorge Bush",
       Price: "0.66",
       Description: "Зарегистрироваться на сайте",
       URL: "",
       icon: <FaRegClock />,
       Timer: 15,
       id: 15,
     },
   ];

    const items = data.length > 0 ? data : tasks;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/tasks`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pagesCount = Math.ceil(items?.total / items?.per_page);
  const pages = [];
  for (let i = 1; i < pagesCount; i += 1) {
    pages.push(i);
  }

  const onClick = (pageNumber) => {
    setData((prevData) => ({ ...prevData, current_page: pageNumber - 1 }));
  };

  return (
    <div className={cls.pages}>
      {pages.map((page) => {
        return (
          <button
            type="button"
            key={page}
            className={
              data.current_page === page - 1
                ? `${cls.current_page}`
                : `${cls.page}`
            }
            onClick={() => onClick(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
