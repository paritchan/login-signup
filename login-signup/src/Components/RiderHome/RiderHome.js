import React ,{useState,useEffect} from 'react';
// import { Dropdown } from "primereact/dropdown";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.css";
//import "primeflex/primeflex.css";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import "./riderhome.css";
import { locationsDetails } from './mockData';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { rideDetailsInfo } from './mockData';
import { Accordion } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { assignBike,assignAuto,assignSedan,assignSuv } from './mockData';
import Bike from "./images/bike.jpg";
import Auto from "./images/auto.jpg";
import Sedan from "./images/sedan.jpg";
import Suv from "./images/suv.jpg";
import { useNavigate } from "react-router-dom";

const RiderHome = () => {
    const navigate = useNavigate();
    // const [location, setLocation] = useState(null);
    // const [weather, setWeather] = useState(null);
    // const [selectedCity,setSelectedCity] =useState([]);
    const [currentLocation,setCurrentLocation] =useState('');
    const [currentDestination,setCurrentDestination] =useState('');
    const [destinationDropDownDetails,setDestinationDropDownDetails] = useState(locationsDetails || []);
    const [currentDropDownDetails,setCurrentDropDownDetails] = useState([]);
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showRidesAvalible, setShowRidesAvailble] =useState(false);
    const [rideSelected,setSelectedRide] = useState(false)
    const [rideSelectedDetails,setSelectedRideDetails] = useState({});
    const [isRideCompleted,setIsRideCompleted] = useState(false);
    const rideInfo=rideDetailsInfo;
    console.log("currentLocation:",currentLocation,"")
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
    function success(pos) {
        var crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        if(crd.latitude && crd.longitude){
            const locationDetailsTemp = [
                {
                label:'Current Location',
                value:'Current Location'
                }
            ]
            setCurrentDropDownDetails(locationDetailsTemp)
        }
      }

      const selectRideDetails =(ride) =>{
        if(ride?.heading?.toLowerCase().includes('bike')){
            setSelectedRide(true);
            setSelectedRideDetails(assignBike);
            setShowRidesAvailble(false);
        }else if(ride?.heading?.toLowerCase().includes('auto')){
            setSelectedRide(true);
            setSelectedRideDetails(assignAuto);
            setShowRidesAvailble(false);
        }else if(ride?.heading?.toLowerCase().includes('sedan')){
            setSelectedRide(true);
            setSelectedRideDetails(assignSedan);
            setShowRidesAvailble(false);
        }else if(ride?.heading?.toLowerCase().includes('suv')){
            setSelectedRide(true);
            setSelectedRideDetails(assignSuv);
            setShowRidesAvailble(false);
        }else{
            setShowB(true);
        }
      }
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setCurrentDropDownDetails(locationsDetails)
      }
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
              console.log(result);
              if (result.state === "granted") {
                //If granted then you can directly call your function here
                navigator.geolocation.getCurrentPosition(success, errors, options);
              } else if (result.state === "prompt") {
                //If prompt then the user will be asked to give permission
                navigator.geolocation.getCurrentPosition(success, errors, options);
              } else if (result.state === "denied") {
                //If denied then you have to show instructions to enable location
                setCurrentDropDownDetails(locationsDetails)
              }
            });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }, []);

    const renderListGroup = () =>{
        return (
            <ListGroup as="ol" numbered variant="flush">
                {rideInfo?.map((ride) =>{
                    const renderImg = (val) =>{
                        if(val === 'bike'){
                            return Bike;
                        }else if(val === 'auto'){
                            return Auto;
                        }else if(val === 'sedan'){
                            return Sedan;
                        }else if(val === 'suv'){
                            return Suv;
                        }else{
                            return Bike;
                        }
                    }
                    return (
                        <>
                        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start list-item"
                    >
                        <div className="ms-2 me-auto">
                        {/* <img src={`${ride?.img}.jpg`} alt={ride?.img} rounded /> */}
                        <Image src={renderImg(ride?.img)} alt={ride?.img} roundedCircle className='img-alt'/>
                        <div className="fw-bold">{ride.heading}</div>
                        <p>Price: {ride.price}</p>
                        <p>Current Distance from your location : {ride.distance}</p>
                        <p>Expceted time of arrival at your location : {ride.ETA}</p>
                        </div>
                        <Button variant="primary" size="md" onClick={(e) => selectRideDetails(ride)}>
                            Select this ride
                        </Button>
                    </ListGroup.Item>
                        </>
                    )
                })
              
    }
            </ListGroup>
          );
    }

    const accordianGrp = () =>{
        return (
            <Accordion flush >
                {rideInfo?.map((ride,index) =>{
                    const renderImg = (val) =>{
                        if(val === 'bike'){
                            return Bike;
                        }else if(val === 'auto'){
                            return Auto;
                        }else if(val === 'sedan'){
                            return Sedan;
                        }else if(val === 'suv'){
                            return Suv;
                        }else{
                            return Bike;
                        }
                    }
                    return (
                        <>
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{ride.heading}</Accordion.Header>
                            <Accordion.Body>
                            <div className="ms-2 me-auto">
                            <Image src={renderImg(ride?.img)} alt={ride?.img} roundedCircle className='img-alt'/>
                            <div className="fw-bold">{ride.heading}</div>
                            <p>Price: {ride.price}</p>
                            <p>Current Distance from your location : {ride.distance}</p>
                            <p>Expceted time of arrival at your location : {ride.ETA}</p>
                            </div>
                            <Button variant="primary" size="md" onClick={(e) => selectRideDetails(ride)}>
                                Select this ride
                            </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        </>
                    )
                })
              
    }
           </Accordion>
          );
    }

    const cancelRideDetails= () =>{
        setSelectedRide(false);
        setSelectedRideDetails({});
        setShowRidesAvailble(true);
    }
    
    const startRide = () =>{
        setSelectedRide(false);
        setIsRideCompleted(true);
    }

    const renderRideInfo = (ride) =>{
        console.log("ride:",ride)
        return (
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Rider Name: {ride.riderName}</div>
                    <p>Vechilce Name: {ride.vechilceName}</p>
                    <p>Vechile Number : {ride.vechilceNumber}</p>
                    <p>Expceted time of arrival at your location : {ride.ETA}</p>
                    <span>
                        <Button variant="primary" size="md" onClick={(e) => startRide()}>
                                Start this ride
                        </Button>
                        <Button variant="primary" size="md" onClick={(e) => cancelRideDetails()}>
                                Cancel this ride
                        </Button>
                    </span>
                    </div>
                </ListGroup.Item>
            </ListGroup>
          );
    }
    // const selectedCityFunc =(e) =>{
    //     console.log(e)
    //     setSelectedCity(e.value)
    // }
    // console.log("cities:",cities)

    const getRideDetails = () =>{
        if(currentLocation && currentDestination){
            setShowRidesAvailble(true);
            setShowA(false);
            setIsRideCompleted(false);
        }else{
            setShowA(true);
        }
    }
    const toggleShowA = () => setShowA(false);
    const toggleShowB = () => setShowB(false);

    const submitFeedBack = () =>{
        navigate("/feedback")
    }
    return (
        <Container>
            {/* <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
            </Spinner> */}
            <Card className='card-main' style={{height:'auto' }}>
        <Row className="justify-content-md-center">
            <Col>
            <Card.Body>
                <Card.Title><h1>Welcome to Rider App</h1></Card.Title>
                <Card.Text>
                    <h4>Please select the pick up and destination to start your ride.</h4>
                </Card.Text>
            </Card.Body>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md={{ span: 8 }}>
            <Form.Label htmlFor="pickup">Please select your pick up point</Form.Label>
            <Form.Select aria-label="Default select example" id="pickup" onChange={e => setCurrentLocation(e.target.value)}>
                <option>Open this select menu</option>
                {currentDropDownDetails?.map((location) => <option value={location.value}>{location.label}</option>)}
            </Form.Select>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md={{ span: 8}}>
            <Form.Label htmlFor="destination">Please select your destination</Form.Label>
            <Form.Select aria-label="destination" onChange={e => setCurrentDestination(e.target.value)}>
                <option>Open this select menu</option>
                {destinationDropDownDetails?.map((location) => <option value={location.value}>{location.label}</option>)}
                {/* <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
            </Form.Select>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md={{ span: 8}}>
            <Button variant="primary" size="md" onClick={(e) => getRideDetails()}>
                Get Ride details
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    Please Current and Destination details.
                </Toast.Header>
            </Toast>
        </Col>
        </Row>
        {showRidesAvalible && <>
        <Row className="justify-content-md-center">
            <Col>
            {accordianGrp()}
            </Col>
        </Row>
        </>}
        {rideSelected && <>
        <Row className="justify-content-md-center">
            <Col>
            {rideSelectedDetails && renderRideInfo(rideSelectedDetails)}
            </Col>
            <Toast show={showB} onClose={toggleShowB}>
                <Toast.Header>
                    No Rides Availbe Please select a diffrent ride option.
                </Toast.Header>
            </Toast>
        </Row>
        </>}
        {isRideCompleted && 
        <>
        <Row className="justify-content-md-center">
            <Col>
                <Toast
                className="d-inline-block m-1"
                bg='success'
                >
                <Toast.Body className='success'>
                    You ride has been completed Successfully.
                </Toast.Body>
                </Toast>

                <h3>Kidnly provide the feedback on your ride</h3>
                <Button variant="primary" size="md" onClick={(e) => submitFeedBack()}>
                Submit feedback
            </Button>
            </Col>
        </Row>
        </>}
        </Card>
      </Container>
    );
  }
  


export default RiderHome