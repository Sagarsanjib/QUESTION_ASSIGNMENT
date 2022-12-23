
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from './FetchButton'

function Settings() {
   



    
    const loading = useSelector((state) => state.options.loading)

    
    


     const dispatch = useDispatch()

  
    

    const handleAmountChange = (event) => {
        dispatch({
            type: 'CHANGE_AMOUNT',
            amount_of_questions: event.target.value,
        })
    }

    if (!loading) {
        return (
            <div>
                

                <div>
                    <h2>Enter Number Of Questions you want to answer</h2>
                    
                    <input    type="text" placeholder="enter the number" onChange={handleAmountChange} />
                </div>
                {
                    /*value={questionAmount}*/
                }


                <FetchButton text="START" />
            </div>
        )
    }

    return <p>LOADING...</p>
}
export default Settings