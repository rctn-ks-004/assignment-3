



const styles = {
    mainPages:{
        display:'flex',
        height:'100%',
        fontFamily:'Arial'
        
    },
    rightPages:{
        width: '100%'
    },

    aboutPages:{
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:'320px',
        marginLeft:'23%',

    },

    experiencePages:{
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:'300px',
        marginLeft:'23%',
    },

    awardPages:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:'300px',
        marginLeft:'23%',
    },

    interestPages:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:'300px',
        marginLeft:'23%',
    },

    skillsPages:{
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:'300px',
        marginLeft:'23%',
    },

    sideBar:{
        width: '20%',
        height: '100vh',
        flex:'1',
        background: '#333333',
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:'1em',
        textAlign: 'center',
        fontWeight:'bold',
        position:'fixed'

    },

    textLink: isActive => ({
        color: isActive? 'white':'#A8B6B6',
        textDecoration: 'none',
        display:'inline-block',
        marginTop:'10px'
    }),

    image:{
        width: '26vh',
        height: '26vh',
        borderRadius: '13vh',
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        marginTop:'13em'
    }

};

export default styles;