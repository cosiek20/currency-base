import ResultBox from './ResultBox';
import { cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox  from="PLN" to='USD' amount={100} />)
    })
    it('should render proper info about conversion when PLN -> USD', () => {

      const testCases = [
        { amount:'100', expected:"PLN 100.00 = $28.57" },
        { amount:'400', expected:"PLN 400.00 = $114.29" },
        { amount:'20', expected:"PLN 20.00 = $5.71" },
        { amount:'5', expected:"PLN 5.00 = $1.43" },
        { amount:'2030', expected:"PLN 2,030.00 = $580.00" },
      ];

      for(const testObj of testCases){

        render(<ResultBox  from="PLN" to='USD' amount={parseInt(testObj.amount)} />)

        const mainDiv = screen.getByTestId('mainDiv')

        const parsedAmount = parseInt(testObj.amount)
        const finalValue = Math.round( (parsedAmount / 3.5) * 100 ) / 100;

        expect(mainDiv).toHaveTextContent(testObj.expected);
        
        cleanup()
      }
      
    })
    it('should render proper info about conversion when USD -> PLN', () => {

      const testCases = [
        { amount:'100', expected:'$100.00 = PLN 350' },
        { amount:'400', expected:'$400.00 = PLN 1,400.00' },
        { amount:'20', expected:'$20.00 = PLN 70' },
        { amount:'5', expected:'$5.00 = PLN 17.5' },
        { amount:'2030', expected:'$2,030.00 = PLN 7,105' },
      ];

      for(const testObj of testCases){

        render(<ResultBox  from="USD" to='PLN' amount={parseInt(testObj.amount)} />)

        const mainDiv = screen.getByTestId('mainDiv')

        expect(mainDiv).toHaveTextContent(testObj.expected);
        
        cleanup()
      }
      
    });
    it('should render proper info about conversion when PLN -> PLN or USD -> USD', () => {

      const testCases = [
        { amount:"100", from:'PLN', to:"PLN", expected:"PLN 100.00 = PLN 100.00" },
        { amount:"50", from:'PLN', to:"PLN", expected:"PLN 50.00 = PLN 50.00" },
        { amount:"100", from:'USD', to:"USD", expected:"$100.00 = $100.00" },
        { amount:"50", from:'USD', to:"USD", expected:"$50.00 = $50.00" }
      ];

      for(const testObj of testCases){

        render(<ResultBox  from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />)

        const mainDiv = screen.getByTestId('mainDiv')

        expect(mainDiv).toHaveTextContent(testObj.expected);
        
        cleanup()
      }
      
    });
});
