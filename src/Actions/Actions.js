import { useEffect, useState } from "react";

export const Actions = () => {
  let [form1, setForm1] = useState([]);
  let [form2, setForm2] = useState([]);


    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);

  useEffect(() => {
    fetch("http://localhost/php-react/form1.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setForm1(data.form1.reverse());
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      fetch("http://localhost/php-react/form2.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setForm2(data.form2.reverse());
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    form1,
    form2,
    userLength,
  };
};
