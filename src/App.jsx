import TaxForm from "./components/TaxForm";
import TaxReport from "./components/TaxReport";

import { Container, Typography } from '@mui/material';

import { useState } from "react"

function App() {  
  const [taxData, setTaxData] = useState(null)

  const calculateTax = (values) => {  

    let tax = 0;

    const income = parseFloat(values.income);

    if (income <= 10000) {
      tax = income * 0.05;

    }else if (income <= 20000){
      tax = income * 0.01;
    }else{
      tax = income * .15;
    }

    const taxData = {
      ...values,
      tax,
    };

    setTaxData(taxData)
  }
  
  return (
    <Container style={{maxWidth: "50rem", margin: "0 auto"}}>
      <Typography variant="h3" align="center" style={{marginBottom: "1rem"}} >
        Calculadora de Impostos
      </Typography>
      <TaxForm onSubmit={calculateTax} />
      {taxData && <TaxReport taxData={taxData} />}
    </Container>
  );
}

export default App;
