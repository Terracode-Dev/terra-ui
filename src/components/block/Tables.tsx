import { useState } from "react";
import { Button } from "../base/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../base/ui/dialog";
import { Input } from "../base/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../base/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function Tables() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    //json structure
    type TableData = {
        "Table id": string;
        "Table Name": string;
        "Discription": string;
        "Last updated": string;
    }
    type GetDataType = {
        tablesdata: TableData[];
    }

    const GET:GetDataType = {
        tablesdata: [
            {"Table id":"1","Table Name":"Carr","Discription":"Antonomoli","Last updated":"5/24/2024"},
            {"Table id":"2","Table Name":"Ursola","Discription":"Wyrall","Last updated":"6/14/2023"},
            {"Table id":"3","Table Name":"Sybila","Discription":"Abrahmovici","Last updated":"4/28/2024"},
            {"Table id":"1","Table Name":"Carr","Discription":"Antonomoli","Last updated":"5/24/2024"},
            {"Table id":"2","Table Name":"Ursola","Discription":"Wyrall","Last updated":"6/14/2023"},
            {"Table id":"3","Table Name":"Sybila","Discription":"Abrahmovici","Last updated":"4/28/2024"},
            {"Table id":"4","Table Name":"Madeleine","Discription":"Galier","Last updated":"12/30/2023"},
            {"Table id":"5","Table Name":"Lauri","Discription":"Suart","Last updated":"2/15/2024"},
            {"Table id":"6","Table Name":"Merill","Discription":"Sleight","Last updated":"9/22/2023"},
            {"Table id":"7","Table Name":"Blondell","Discription":"Jobey","Last updated":"11/16/2023"},
            {"Table id":"8","Table Name":"Cordey","Discription":"Kingsmill","Last updated":"4/20/2024"},
            {"Table id":"9","Table Name":"Alex","Discription":"Harmond","Last updated":"8/25/2023"},
            {"Table id":"10","Table Name":"Clemmy","Discription":"Ianni","Last updated":"12/19/2023"},
            {"Table id":"11","Table Name":"Kevin","Discription":"Ramsden","Last updated":"4/6/2024"},
            {"Table id":"12","Table Name":"Elsa","Discription":"Flight","Last updated":"9/5/2023"},
            {"Table id":"13","Table Name":"Lettie","Discription":"Artrick","Last updated":"6/5/2023"},
            {"Table id":"14","Table Name":"Sammy","Discription":"Gilhespy","Last updated":"11/27/2023"},
            {"Table id":"15","Table Name":"Loy","Discription":"Eixenberger","Last updated":"8/13/2023"},
            {"Table id":"16","Table Name":"Karlen","Discription":"Giacoppoli","Last updated":"10/12/2023"},
            {"Table id":"17","Table Name":"Doralin","Discription":"Gowen","Last updated":"8/10/2023"},
            {"Table id":"18","Table Name":"Emmet","Discription":"Angel","Last updated":"12/28/2023"},
            {"Table id":"19","Table Name":"Jeniece","Discription":"Gravett","Last updated":"7/30/2023"},
            {"Table id":"20","Table Name":"Bron","Discription":"Axel","Last updated":"11/1/2023"},
            {"Table id":"21","Table Name":"Brittan","Discription":"O' Mullane","Last updated":"3/1/2024"},
            {"Table id":"22","Table Name":"Marc","Discription":"Woolager","Last updated":"11/15/2023"},
            {"Table id":"23","Table Name":"Esme","Discription":"Gierhard","Last updated":"3/11/2024"},
            {"Table id":"24","Table Name":"Cherish","Discription":"Moors","Last updated":"12/22/2023"}
        ]
    };
    

    //searchbar
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    const filteredData = GET.tablesdata.filter(row => {
        return row["Table Name"].toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleRowClick = (id: string) => {
        // Handle row click 
        // rendering the Table component
    };

    const handleDelete = (id: string) => {
        //delete table row
    };

    const handleUpdate = (row) => {
        setSelectedRow(row);
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedRow(null);
    };
// paginations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem); 

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const pageNumbers = Math.ceil(filteredData.length / itemsPerPage); 
//Data mapping
const tableheading="h-12 px-2  align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"

    const tableRows = currentItems.map((row, rowIndex) => (
        <tr key={row.id} onClick={() => handleRowClick(row.id)} className=" border-2 hover:bg-gray-100 hover:shadow-md cursor-pointer">
            {Object.values(row).map((value, colIndex) => (
                <td className=" p-1 text-center" key={colIndex}>{value}</td>
            ))}
                <td className={tableheading}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-2 items-center shadow-lg rounded-lg focus:border-none">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleDelete(row["Table id"])}>
                            Delete
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleUpdate(row)}>Update</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </td>
        </tr>
    ));

    
    
    return (
        <div className="h-screen p-10 pt-0 pb-16">
            <div className=" flex flex-col pt-5">
                <div className="flex flex-row justify-between">
                    <div>
                    <h1 className="text-4xl font-bold">Tables</h1>
                    </div>
                    <div>
                    <Button className="mr-2"> Add Table</Button>
                    
                    <Button><FontAwesomeIcon icon={faGear} /></Button>
                    </div>
                    
                </div>
                <div className="W-1/4 flex flex-row  justify-between mt-10">
                    <input type="text" placeholder="Search by Table Name..." value={searchTerm} onChange={handleSearchChange} className="p-1 w-1/4 flex h-10  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    {/* column filtering 
                    still working */}
                    <Button className='mr-2'variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}> Columns
                    </Button>
                </div>
                
            </div>

            <div className=" flex shadow-lg rounded-xl mt-4">
                <table className="border-2 w-full  rounded-xl">
                    <thead className="border-2 rounded-md">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className={tableheading}>Table Id</th>
                            <th className={tableheading}>Table Name</th>
                            <th className={tableheading}>Description</th>
                            <th className={tableheading}>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button onClick={prevPage} disabled={currentPage === 1} className="mx-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Previous</button>
                {[...Array(pageNumbers).keys()].map((number) => (
                    <button key={number + 1} onClick={() => paginate(number + 1)} className={`mx-1 px-4 py-2 ${currentPage === number + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded`}>{number + 1}</button>
                ))}
                <button onClick={nextPage} disabled={currentPage === pageNumbers} className="mx-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">Next</button>
            </div>
            {/* update and delete buttons */}
            {isDialogOpen && selectedRow && (
                <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="name" className="text-right">
                                    Name
                                </label>
                                <Input id="name" defaultValue={selectedRow["Table Name"]} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <label htmlFor="username" className="text-right">
                                    Description
                                </label>
                                <Input id="description" defaultValue={selectedRow["Discription"]} className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={handleDialogClose}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
        
    );
    
}
