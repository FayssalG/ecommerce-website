import { useEffect, useState } from "react";
import { useProductsCatalogue } from "../ProductsCatalogueProvider";

export default function useSort(){
    return {
        sortBy,
        handleChangeSortBy,
    }
}