import React from 'react';
import {Nav, initializeIcons} from '@fluentui/react';


const links= [
    {
    	links: [{
    		name: 'Dashboard',
    		url: '/',
    		key: 'key1',
    		iconProps:{
    			iconName: 'News',
    			styles: {root:{
    				fontSize: 20,
    				color: '#106ebf',
    			}}
    		}
    	},

    	{
    		name: 'settings',
    		url: '/settings',
    		key: 'key2',
    		iconProps:{
    			iconName: 'playerSettings',
    			styles: {root:{
    				fontSize: 20,
    				color: '#106ebf',
    			}}
    		}
    	},

    	{
    		name: 'transfers',
    		url: '/transfer',
    		key: 'key3',
    		iconProps:{
    			iconName: 'SwitcherStartEnd',
    			styles: {root:{
    				fontSize: 20,
    				color: '#106ebf',
    			}}
    		}
    	},

	   {
    		name: 'Stas',
    		url: '/settings2',
    		key: 'key4',
    		iconProps:{
    			iconName: 'StackedLineChart',
    			styles: {root:{
    				fontSize: 20,
    				color: '#106ebf',
    			}}
    		}
    	},
       

    	]
    	
    }


]

const navStyles ={
	          root:{
	          	  height: '100vh',
	          	  boxSizing: 'border-box',
	          	  border: '1px solid #eee',
	          	  overflowY: 'auto',
	          	  paddingTop: '10vh',
    
    		
    			}
}

const Navigation = () => {
	initializeIcons();
	return ( 
		<Nav 
		 groups ={links}
		 selectedKey="key1"
		 styles={navStyles}
		/>

	);
};

export default Navigation1;