import * as Cal from '../cal'
import React from 'react';

const SimpleCalculator=()=>{

return (
<>
<h1> The Sum of Two no 5 and 6 is :{Cal.add(5,6)}</h1>
<h1> The sub of Two no 5 and 6 is :{Cal.sub(5,6)}</h1>
<h1> The mul of Two no 5 and 6 is :{Cal.mul(5,6)}</h1>
<h1> The div of Two no 5 and 6 is :{Cal.div(5,6)}</h1>

</>

);

}

export default SimpleCalculator;