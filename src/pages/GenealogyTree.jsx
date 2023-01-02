import React, { useEffect } from "react";
import "../assets/css/genealogy-tree.scss";
import { FamilyTree } from '../assets/data/familyTree'
import Tree from "../components/Tree";
import Header from "../components/Header";

const GenealogyTree = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      },[])
    return (
        <div className="family-tree">
            <Header />
            <div className="page-title">Family Tree <span></span></div>
            <div className="color-ins">
                <div><span></span> --Parent</div>
                <div><span></span> --Child</div>
                <div><span></span> --Grand-Child</div>
            </div>
            <div className="tree">
                {<Tree data={FamilyTree}/>}
            </div>
        </div>
    );
};

export default GenealogyTree;
