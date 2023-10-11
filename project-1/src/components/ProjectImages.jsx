import p1 from '../assets/ProjectImages/p1.png'
import p2 from '../assets/ProjectImages/p2.png'
import p3 from '../assets/ProjectImages/p3.png'
import p4 from '../assets/ProjectImages/p4.png'
import p5 from '../assets/ProjectImages/p5.png'
import p6 from '../assets/ProjectImages/p6.png'
import p7 from '../assets/ProjectImages/p7.png'
import p8 from '../assets/ProjectImages/p8.png'
import p9 from '../assets/ProjectImages/p9.png'
import p10 from '../assets/ProjectImages/p10.png'
import p11 from '../assets/ProjectImages/p11.png'
import p12 from '../assets/ProjectImages/p12.png'
import p13 from '../assets/ProjectImages/p13.png'
import p14 from '../assets/ProjectImages/p14.png'
import p15 from '../assets/ProjectImages/p15.png'
import p16 from '../assets/ProjectImages/p16.png'

function projectIDHandler(projectID) {
    switch (projectID) {
        case "p1":
            return <img src={p1} alt="" />
        case "p2":
            return <img src={p2} alt="" />
        case "p3":
            return <img src={p3} alt="" />
        case "p4":
            return <img src={p4} alt="" />
        case "p5":
            return <img src={p5} alt="" />
        case "p6":
            return <img src={p6} alt="" />
        case "p7":
            return <img src={p7} alt="" />
        case "p8":
            return <img src={p8} alt="" />
        case "p9":
            return <img src={p9} alt="" />
        case "p10":
            return <img src={p10} alt="" />
        case "p11":
            return <img src={p11} alt="" />
        case "p12":
            return <img src={p12} alt="" />
        case "p13":
            return <img src={p13} alt="" />
        case "p14":
            return <img src={p14} alt="" />
        case "p15":
            return <img src={p15} alt="" />
        case "p16":
            return <img src={p16} alt="" />
        default:
            break;
    }
}

export function ProjectImages(props) {
    const projectID = props.projectID;
        return ( 
        <div>
            {projectIDHandler(projectID)}
        </div>
    )
}