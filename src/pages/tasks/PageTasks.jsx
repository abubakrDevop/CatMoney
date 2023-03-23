import React, { useEffect, useState } from "react";
import axios from "axios";
import cls from "../tasks/PageTasks.module.scss";

export const PageTasks = () => {
    const [data, setData] = useState([]);

  const pagesCount = Math.ceil(data.total / data.per_page);
  const pages = [];
  console.log("pages", pages)
  for (let i = 0; i <= pagesCount; i += 1) {
    pages.push(i + 1)
  }
  // const pages = [1, 2, 3, 4, 5]

    // if (pagesCount > 10) {
    //   if (data.current_page > 8) {
    //     for (let i = data.current_page - 4; i <= data.current_page + 5; i += 1) {
    //       pages.push(i);
    //       if (i === pagesCount) break;
    //     }
    //   } else {
    //     for (let i = 1; i <= 10; i += 1) {
    //       pages.push(i);
    //       if (i === pagesCount) break;
    //     }
    //   }
    // } else {
    //   for (let i = 1; i <= pagesCount; i += 1) {
    //     pages.push(i);
    //   }
    // }


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

  const onClick = (pageNumber) => {
    console.log('pageNumber', pageNumber)
    setData({ ...data, current_page: pageNumber});
    console.log('data.current_page', data.current_page)
  };

  console.log("data.current_pagewwwwwwwwww", data.current_page);

  return (
    <div className={cls.pages}>
      {pages.map((page) => {
        return (
          <button
            type="button"
            key={page}
            className={data.current_page === page ? `${cls.current_page}` : `${cls.page}`}
            onClick={() => onClick(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

