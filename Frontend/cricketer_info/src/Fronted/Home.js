

function Home(){

    // const backgroundStyle = {
    //     backgroundImage: 'url(&{backgroundImage})',
    //     backgroundSize: 'cover',                  
    //     backgroundPosition: 'center',               
    //     height:  '100vh' ,
    //     width: '100%',
    //     backdrpFilter: 'blur("50%")'
    //   };

    return(
        <>
            <div className="container mt-2">
                <h1 className="m-5">Hello Guys,</h1>
                <h3 className="m-5">Welcome to Cricketer Management.</h3>
                <p>Cricketer Management implementing CRUD operations to manage cricketer data. You can Create new cricketer profiles, Read details such as stats and history, Update existing records, and Delete profiles as needed. The MongoDB database stores cricketer information, with Express and Node.js handling the backend logic and API routes.React provides an intuitive UI for users.</p>
            </div>
        </>
    );
};

export default Home;