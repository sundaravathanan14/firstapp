
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
const cartValue=[{
  plan:'Free',
  price:'$0',
  itemList:[
    {
      enable:true,
      name: 'Single User',
    },
    {
      enable:true,
      name: '5GB Storage',
    },
    {
      enable:true,
      name: 'Unlimited Public Projects',
    },
    {
      enable:true,
      name: 'Community Access',
    },
    {
      enable:false,
      name: 'Unlimited Private Projects',
    },
    {
      enable:false,
      name: 'Dedicated Phone Support',
    },
    {
      enable:false,
      name: 'Free Subdomain',
    },
    {
      enable:false,
      name:  'Monthly Status Reports',
    },
 ]
},
{
  plan:'Plus',
  price:'$9',
  itemList:[{
    enable:true,
    name: '5 Users',
  },
  {
    enable:true,
    name: '50GB Storage',
  },
  {
    enable:true,
    name: 'Unlimited Public Projects',
  },
  {
    enable:true,
    name: 'Community Access',
  },
  {
    enable:true,
    name: 'Unlimited Private Projects',
  },
  {
    enable:true,
    name: 'Dedicated Phone Support',
  },
  {
    enable:true,
    name: 'Free Subdomain',
  },
  {
    enable:false,
    name:  'Monthly Status Reports',
  }]
},
{
  plan:'Pro',
  price:'$49',
  itemList:[{
    enable:true,
    name: 'Unlimited User',
  },
  {
    enable:true,
    name: '150GB Storage',
  },
  {
    enable:true,
    name: 'Unlimited Public Projects',
  },
  {
    enable:true,
    name: 'Community Access',
  },
  {
    enable:true,
    name: 'Unlimited Private Projects',
  },
  {
    enable:true,
    name: 'Dedicated Phone Support',
  },
  {
    enable:true,
    name: 'Unlimited Free Subdomain',
  },
  {
    enable:true,
    name:  'Monthly Status Reports',
  }]}]
  return (
    <div className="App">
      <Container>
      <Row>
        
        {cartValue.map((data,index)=>(
          <Col key={index}><Cart cartData={data} key={index}/></Col>
        
      ))}
        
      </Row>
    </Container>
      
      
    </div>
  );
}

export default App;

function Cart({cartData}){
  return ( 
  <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title className='plan'>{cartData.plan}</Card.Title>
    <Card.Title className='priceTitle'>{cartData.price}<span className='month'>/Month</span></Card.Title>
    <hr/>
    <ListGroup variant="flush">
      {cartData.itemList.map((data,index)=>(<ListGroup.Item key={index} className={data.enable ? 'tick':'cross'} >{data.name}</ListGroup.Item>))}
      </ListGroup>
    
    <Button variant="primary" size="lg" >Button</Button>
  </Card.Body>
</Card>
);

}