import React from "react";
import Navigation from "../components/Navigation";
import "../assets/css/genealogy-tree.scss";
import { FamilyTree } from '../assets/data/familyTree'
import Tree from "../components/Tree";

const GenealogyTree = () => {
    return (
        <div className="family-tree">
            <Navigation />
            <div className="title">Family Tree</div>
            <div className="tree">
                {<Tree data={FamilyTree}/>}
            </div>
        </div>
    );
};

export default GenealogyTree;
