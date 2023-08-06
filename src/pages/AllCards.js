import React from "react";
import Card from "../componets/Card";

export default function AllCards(){
    return (
        <div>
            <h1 className="text-center mb-5">
                Browse our clothes
            </h1>
            <Card category='*'/>
            
        </div>
    )
}