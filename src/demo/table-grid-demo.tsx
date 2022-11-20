
import { CenteringContainer } from "oaky-ui-kit";
import {TableGridSelectable,TableGrid} from "oaky-ui-kit";


function TableGridDemo() {
    const Headers = [
        {
          "prop": "id",
          "label": "Id"
      },
            {
          "prop": "username",
          "label": "Username"
      },
            {
          "prop": "email",
          "label": "Email"
      }
      ]
  ;
      
  const Rows = [
          {
          "id": "636bca1c d55d24a c2b48d644",
          "username": "Diego Maradona",
          "email": "diego@hotmail.com"
      },
        {
          "id": "636bca1 cd55d2 4ac2b48d6ba",
          "username": "Lionel Messi",
          "email": "coco@hotmail.com"
      },
      ];

    return (

        <div>
            <h2>TableGridSelector</h2>

            <CenteringContainer>
            <TableGridSelectable headers={Headers} rows={Rows} onClick={(item: any)=>alert(item.id)}/>
            </CenteringContainer>
            
            <h2>TableGrid</h2>
            <CenteringContainer>
            <TableGrid headers={Headers} rows={Rows} frames={'1fr 1fr 1fr'}/>
            </CenteringContainer>
            
        
        </div>

    )
}

export default TableGridDemo