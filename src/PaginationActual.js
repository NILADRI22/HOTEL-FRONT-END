import React from 'react'

export const PaginationActual = ({dataperPage,totalPosts,paginate}) => {
    const pagenumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/dataperPage);i++)
    {
        pagenumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
             {pagenumbers.map(number=>(
                 <li key={number} className="page-item">
                  <a onClick={()=>paginate(number)} href="#" className="page-link">
                      {number}
                  </a>
                 </li>
             ))}
            </ul>
        </nav>
    )
}
