import ReactDOM from 'react-dom';
import './main.css'
import './main.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from  'react-bootstrap/Card'

import styled from 'styled-components';

function ScssCard(){
    let picUrl="https://cdn.prod.www.spiegel.de/images/010017ff-0001-0004-0000-000001294826_w1528_r1.4513788098693758_fpx48.2_fpy49.98.jpg"
    return <div>
                <div className="scssCard">
                    <img src={picUrl} alt="Avatar" ></img>
                    <div className="scssContainer">
                                <h4><b>Demba</b></h4>
                                <p>Singer -Seeed-</p>
                                <p>scss</p>
                            </div>
                    </div>
            </div>
}

function BootsTrap(){
    return<div>
        <Card style={{ width: '300px' }}>
            <Card.Img style={{height:"200px"}} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Bob-Marley-in-Concert_Zurich_05-30-80.jpg" />
            <Card.Body style={{backgroundColor:"rgb(138, 137, 170)",height:"150px"}}>
                <Card.Title>Bob Marley</Card.Title>
                <Card.Text>
                Reaggea Singer
                <p>Bootstrap</p>
                </Card.Text>
                
            </Card.Body>
        </Card>

    </div>
}


function CssCard(){
    let picUrl="https://pbs.twimg.com/media/DFNClNwXYAAlgtb?format=jpg&name=900x900"
    return <div>
                <div className="cards">
                    <img src={picUrl} alt="Avatar" ></img>
                    <div className="container">
                                <h4><b>Chester Bennington</b></h4>
                                <p>Lead Singer -Linkin Park-</p>
                                <p>css</p>
                            </div>
                    </div>
            </div>
}

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    border-radius: 10px;
    border: 2px black solid;
    &:hover {
        box-shadow: 0 5px 16px 0 rgba(0,0,0,0.5);
      }
`
const CardImg = styled.div`
    height:200px;
    width: 100%;
    background-image:url("https://image.stern.de/30521890/t/nT/v3/w960/r1.7778/-/kurt-cobain-nirvana.jpg") ;
    background-size:cover;
`
const CardBody = styled.div`
    padding: 2px 16px;
    background: rgb(138, 137, 170);
    height:150px;
`

function StyledComponent(){
    return <div>
        <CardContainer>
            <CardImg></CardImg>
            <CardBody>
                <h4><b>Kurt Cobain</b></h4>
                 <p>Guitarist -Nirvana-</p>
                 <p>styled Component</p>
            </CardBody>
        </CardContainer>
    </div>
}


ReactDOM.render(
    <div className="wrapper">
        <CssCard></CssCard>
        <ScssCard></ScssCard>
        <BootsTrap></BootsTrap>
        <StyledComponent></StyledComponent>
    </div>,
    document.querySelector("#root")
);