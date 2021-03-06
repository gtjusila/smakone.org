import React from 'react'
import { Link } from 'gatsby';

function AlumniCard(props) {
    return(
        <div className="m-3">
            <img src={ props.img } className="object-cover w-full rounded-lg shadow-xl" alt={props.alt} />
            <div className="p-2">
                <h2 className="font-semibold text-center text-3xl">{ props.title }</h2>
                <p className="text-center mb-6">{ props.desc }</p>
                <div className="font-medium text-center my-3 text-gray-500">
                    <Link to={props.dir}>
                        Kenali Lebih Lanjut {">"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AlumniCard