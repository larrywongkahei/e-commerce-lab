import React from "react";
import { render } from "@testing-library/react";
import MainContainer from "../Container/MainContainer";


describe('Container', () =>{
    it('Should be able to render without crashing', ()=>{
        render(<MainContainer />)
    })
})
    