import React,{useState} from 'react'

function Pagination(props) {
    // const [noOfPages, setpages] = useState(1);
    const finalPage = new Array(props.noOfPages);
    for (let i = 1; i <= props.noOfPages; i++) {
        finalPage.push(i);
      }

      const currentPage = props.currentPage;

    const nextPage = (number) => {
        props.setCurrPage(number);
      };
    
  return (
    <div className='pagination'>
      <p id='cpage'>Change Page 📃</p>
 {finalPage.map((num, index) => {
        return (
          <button id='pagebutton'
            className="btn btn-primary"
            name={currentPage === num ? "selected" : ""}
            key={index}
            onClick={function () {
              nextPage(num);
            }}
          >
            {num}
          </button>
        );
      })}
    </div>
  )
}

export default Pagination