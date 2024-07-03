## **Starry Inspirations** - entertainment web application    

Users can select a randomly generated inspirational quote tailored to their zodiac sign.     
     
["Starry Inspirations" application live link](https://starry-inspirations.netlify.app/)   
           

 ### Description     
          
   The initial goal was to develop an application allowing users to access daily horoscopes based on their zodiac signs. Initially, the [Horoscope API](https://horoscope-app-api.vercel.app/) was chosen for this purpose.
            
**Below are the key components created for this application:**       
        
- **App.jsx:** Configures routing for the application.          
         
- **Layout.jsx:** Provides a layout wrapper for nested routes, utilizing Outlet from react-router-dom to render child components based on the routing configuration from App.jsx.       
        
- **HomePage.jsx:** Lists links to different horoscopes, enabling users to navigate to specific horoscope pages based on their zodiac signs.     
         
- **Horoscope.jsx:** Retrieves the zodiac sign from URL query parameters. Manages state and side effects using useState and useEffect hooks. Fetches data from an external API related to the selected zodiac sign. Renders the HoroscopeDisplay component with the fetched data and includes a link back to the home page.        
       
- **HoroscopeDisplay.jsx:** Receives horoscope data as a prop and displays the fetched data or a loading message.   

 However, during the app development, attempts to fetch data from  horoscope [URL](https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=sagittarius&day=TODAY) resulted in a CORS error that could not be resolved.    
           
 As a solution, the decision was made to utilize inspirational quotes instead of daily horoscopes. The application currently fetches data from the [Quotes Free API](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373).     
       
This approach allowed the application to continue providing meaningful content despite the initial technical challenge encountered with the original horoscope API.           
            
          
           
**Things I learned:**                
     
A **CORS (Cross-Origin Resource Sharing) error** occurs when a web application running in a browser tries to request resources from a different origin (domain, protocol, or port) than its own. Browsers have a security feature called the Same-Origin Policy, which restricts scripts and resources from one origin from accessing resources from another origin unless the server allows it.

