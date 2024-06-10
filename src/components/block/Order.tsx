import { useState } from "react";
import { Button } from "../base/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../base/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { format, isSameDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/base/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/ui/popover";


export default function Order() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    //json structure
    type TableData = { 
        "Order id": number;
        "Item id": number;
        "Item name": string;
        "user": string;
        "Order Date": string;
        "Total": string;
        "Order method": string;
    };
    type GetResponse = { tablesdata: TableData[]
    }
    const GET:GetResponse = {
        tablesdata: [{"Order id":1,"Item id":1,"Item name":"Beverlie","user":"Seebert","Order Date":"2/12/2024","Total":"Yen","Order method":"mastercard"},
        {"Order id":2,"Item id":2,"Item name":"Lilia","user":"Oliver-Paull","Order Date":"7/1/2023","Total":"Yuan Renminbi","Order method":"china-unionpay"},
        {"Order id":3,"Item id":3,"Item name":"Kathryne","user":"Vidineev","Order Date":"10/10/2023","Total":"Sol","Order method":"jcb"},
        {"Order id":4,"Item id":4,"Item name":"Amalea","user":"Axcel","Order Date":"3/3/2024","Total":"Dollar","Order method":"mastercard"},
        {"Order id":5,"Item id":5,"Item name":"Fredric","user":"Calfe","Order Date":"12/29/2023","Total":"Krona","Order method":"jcb"},
        {"Order id":6,"Item id":6,"Item name":"Hale","user":"Dangerfield","Order Date":"6/28/2023","Total":"Sol","Order method":"mastercard"},
        {"Order id":7,"Item id":7,"Item name":"Trish","user":"Alyukin","Order Date":"4/25/2024","Total":"Rupiah","Order method":"americanexpress"},
        {"Order id":8,"Item id":8,"Item name":"Bill","user":"Daid","Order Date":"11/18/2023","Total":"Dollar","Order method":"jcb"},
        {"Order id":9,"Item id":9,"Item name":"Shurlocke","user":"Dumingo","Order Date":"9/7/2023","Total":"Euro","Order method":"americanexpress"},
        {"Order id":10,"Item id":10,"Item name":"Shalne","user":"Pedrick","Order Date":"11/18/2023","Total":"Dollar","Order method":"jcb"},
        {"Order id":11,"Item id":11,"Item name":"Sheff","user":"Collough","Order Date":"1/13/2024","Total":"Yuan Renminbi","Order method":"diners-club-enroute"},
        {"Order id":12,"Item id":12,"Item name":"Aurea","user":"Menary","Order Date":"3/6/2024","Total":"Ruble","Order method":"visa-electron"},
        {"Order id":13,"Item id":13,"Item name":"Olvan","user":"Lorne","Order Date":"4/12/2024","Total":"Peso","Order method":"visa"},
        {"Order id":14,"Item id":14,"Item name":"Josepha","user":"Blunsom","Order Date":"2/13/2024","Total":"Rupiah","Order method":"switch"},
        {"Order id":15,"Item id":15,"Item name":"Sheffie","user":"Stryde","Order Date":"2/27/2024","Total":"Rupiah","Order method":"jcb"},
        {"Order id":16,"Item id":16,"Item name":"Wyn","user":"Gilardoni","Order Date":"11/7/2023","Total":"Yuan Renminbi","Order method":"diners-club-enroute"},
        {"Order id":17,"Item id":17,"Item name":"Ilyssa","user":"Brunsden","Order Date":"9/16/2023","Total":"Euro","Order method":"bankcard"},
        {"Order id":18,"Item id":18,"Item name":"Junia","user":"Coughlan","Order Date":"4/18/2024","Total":"Yuan Renminbi","Order method":"diners-club-carte-blanche"},
        {"Order id":19,"Item id":19,"Item name":"Horatia","user":"Patterson","Order Date":"11/19/2023","Total":"Yuan Renminbi","Order method":"diners-club-enroute"},
        {"Order id":20,"Item id":20,"Item name":"Averil","user":"Matejovsky","Order Date":"7/9/2023","Total":"Riels","Order method":"jcb"}]
    };
    

    //searchbar
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    const filteredData = GET.tablesdata.filter(row => {
        const matchesSearchTerm = row["Item name"].toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDate = selectedDate ? isSameDay(new Date(row["Order Date"]), selectedDate) : true;
        return matchesSearchTerm && matchesDate;
      });

    const handleRowClick = (id: string) => {
        // Handle row click 
        // rendering the Table component
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
        <tr key={row.id} className=" border-2 ">
            {Object.values(row).map((value, colIndex) => (
                <td className=" p-1 text-center text-left" key={colIndex}>{value}</td>
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
                        <DropdownMenuItem >
                            User Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More..</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </td>
        </tr>
    ));

    
    
    return (
        <div className="h-screen pt-0 pb-16">
            <div className=" flex flex-col pt-5 ">
                <div className="flex flex-row justify-between">
                    <div>
                    <h1 className="text-4xl font-bold">Orders</h1>
                    </div>
                    <div>
                    <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
                    </div>
                    
                </div>
                <div className="W-1/4 flex flex-row  justify-between mt-10">
                    <input type="text" placeholder="Search by Item Name..." value={searchTerm} onChange={handleSearchChange} className="p-1 w-1/4 flex h-10  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    {/* column filtering 
                    still working */}
                    <Button className='mr-2'variant="outline" onClick={() => setDropdownOpen(!dropdownOpen)}> Columns
                    </Button>
                </div>
                
            </div>

            <div className=" flex overflow-y-auto shadow-lg rounded-xl mt-4">
                <table className="border-2 w-full  rounded-xl">
                    <thead className="border-2 rounded-md">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className={tableheading}>Order ID</th>
                            <th className={tableheading}>Item ID</th>
                            <th className={tableheading}>Item Name</th>
                            <th className={tableheading}>User</th>
                            <th className={tableheading}>Order Date</th>
                            <th className={tableheading}>Total</th>
                            <th className={tableheading}>Order method</th>
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
            
        </div>
        
    );
    
}
