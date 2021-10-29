import  styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  text-align: center;

    /* justify-items: center;
    align-content: center; */
  @media screen and (max-width: 1024px){
    display: grid;
    justify-items: center;
    align-content: center;
    }
`;
export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    align-content: space-between;
    grid-gap: 50px;
  @media screen and (max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-content: space-between;


    }
`;

export const AdvLayout = styled.div`
  /* padding:20px;
  display: grid;
    justify-content: center;
    height: max-content; */
    display: grid;
    justify-content: center;
    justify-items: center;
    padding: 20px;
`;


export const AdvSubLayout = styled.div`
  display: flex;
`;

export const AdvCharts = styled.div`
  display: grid;
`;

export const LayoutTreeChart = styled.div`
  display: grid;
    justify-content: center;
    align-content: center;
`;