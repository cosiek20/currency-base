import ResultBox from './ResultBox';
import { cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox  from="PLN" to='USD' amount={100} />)
    })
    it('should render proper info about conversion when PLN -> USD', () => {

      const testCases = [
        {amount:'100'},
        {amount:'400'},
        {amount:'20'},
        {amount:'5'},
        {amount:'203'},
      ];

      for(const testObj of testCases){

        render(<ResultBox  from="PLN" to='USD' amount={parseInt(testObj.amount)} />)

        const mainDiv = screen.getByTestId('mainDiv')

        const parsedAmount = parseInt(testObj.amount)
        const finalValue = Math.round( (parsedAmount / 3.5) * 100 ) / 100;

        expect(mainDiv).toHaveTextContent('PLN '+ parsedAmount + '.00 = $' + finalValue);
        
        cleanup()
      }
      
    })
});
