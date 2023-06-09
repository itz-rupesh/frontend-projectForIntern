import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import NoDetails from '../setupProfile/Nodetails';
import { BASE_URL } from '../../services/helper';

const MatchedProjects = () => {

    const [matchedProjects, setMatchedProjects] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/account/feed/liveprojects/matched`, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setMatchedProjects(res.data);
                console.log(matchedProjects);
            }).catch((err) => {
                console.log(err.response.data.error);
            })

    }, []);
    return (<>
        <div className='container pt-5 mt-5'>
            {
                matchedProjects.length === 0 ? <NoDetails message=" Empty!! 🤷‍♂️" /> :
                    matchedProjects.map((obj, index) => {
                        return <div key={obj._id} className="container-fluid text-white pt-3 pb-3">
                            <div className="body_container bg-black p-3 " style={{ borderRadius: "15px" }}>
                                <ProjectCard
                                    key={obj._id}
                                    project={obj}
                                    // onSelect={setView}
                                    // showFullCard={showFullCard}
                                    showFullCardButton={false}
                                />
                            </div>
                        </div>
                    })
            } </div>
    </>)

}
export default MatchedProjects;