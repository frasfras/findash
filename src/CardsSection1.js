import React from 'react';
import {Card } from '@uifabric/react-cards';
import {Text, initializeIcons} from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
	display: 'flex',
	justifyContent : 'center',
	margin : '10vh 0' 
}

const icons = {
	fontSize: 24,
	padding: 15,
	verticalAlign: 'middle',
	paddingLeft : 0,
	color: '#00078d'
}

const cards = [
  {
  	title: 'Current balance',
  	amount: '12 123',
  	icon: 'Money',
  	percentage: '2.2',
  },
  {
  	title: 'Current Expense',
  	amount: '12 333',
  	icon: 'PaymentCard',
  	percentage: '0.3',
  },
  {
  	title: 'Current Income ',
  	amount: '122 224',
  	icon: 'Savings',
  	percentage: '2.2',
  }
  
]


const CardsSection = () => {
    initializeIcons();
    return (
    <div style= {container}>
    	{cards.map((card) => (
    		<div className="s-Grid-col ms-sm3 ms-xl3">
            <Card >
              <Card.Section>
             
               <Card.Item >

                   <Text>{card.title}</Text>
                 </Card.Item >
                 <Card.Item >

                   <Text>{card.amount}</Text>
                 </Card.Item >
                 <Card.Item >

                   <Text>{card.percentage}</Text>
                 </Card.Item >

              </Card.Section>
              </Card >
            </div>

    		))
      }

    </div>
    )
}


export default CardsSection;