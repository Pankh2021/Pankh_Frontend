import db from "./database";

const createProject = async (email, url, name)=>{

    let initialProjects;
    try{
        initialProjects = await db.collection('projects').doc(email).get();
        initialProjects = initialProjects.data().projects;
    }
    catch(err){
        initialProjects = [];
    }

    const newProject = {
        name,
        url
    }

    let success = true;
    try{
        await db.collection('projects').doc(email).set(
            {
                projects:[...initialProjects, newProject]
            }
        )
    }
    catch(err){
        success = false;
        console.log(err);
    }

    return success;
    
}

export default createProject;