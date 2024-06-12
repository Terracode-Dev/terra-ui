import { useState } from "react";
import { Button } from "@/components/base/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/base/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { format, isSameDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/base/ui/calendar1";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/base/ui/popover1";

export default function Payment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  //json structure
  type TableData = {
    "Payment id": number;
    "Item id": number;
    "Item name": string;
    "user": string;
    "Payment Date": string;
    "Payment": string;
    "Payment method": string;
  };
  type GetResponse = { tablesdata: TableData[] };

  const GET:GetResponse = {
    tablesdata: [{"Payment id":1,"Item id":1,"Item name":"Gregoor","user":"Hansley","Payment Date":"5/13/2024","Payment":"Yen","Payment method":"maestro"},
    {"Payment id":2,"Item id":2,"Item name":"Charin","user":"Theobalds","Payment Date":"9/5/2023","Payment":"Rupiah","Payment method":"jcb"},
    {"Payment id":3,"Item id":3,"Item name":"Jolyn","user":"Conew","Payment Date":"9/22/2023","Payment":"Lev","Payment method":"mastercard"},
    {"Payment id":4,"Item id":4,"Item name":"Fernandina","user":"Petasch","Payment Date":"7/29/2023","Payment":"Rupiah","Payment method":"laser"},
    {"Payment id":5,"Item id":5,"Item name":"Tailor","user":"Dobrowolski","Payment Date":"12/20/2023","Payment":"Rand","Payment method":"instapayment"},
    {"Payment id":6,"Item id":6,"Item name":"Mayne","user":"Van Zon","Payment Date":"3/26/2024","Payment":"Yuan Renminbi","Payment method":"jcb"},
    {"Payment id":7,"Item id":7,"Item name":"Osborne","user":"Philipard","Payment Date":"3/3/2024","Payment":"Yuan Renminbi","Payment method":"jcb"},
    {"Payment id":8,"Item id":8,"Item name":"Quill","user":"Lomath","Payment Date":"4/19/2024","Payment":"Dollar","Payment method":"maestro"},
    {"Payment id":9,"Item id":9,"Item name":"Bartie","user":"Rymill","Payment Date":"9/29/2023","Payment":"Rupee","Payment method":"jcb"},
    {"Payment id":10,"Item id":10,"Item name":"Janella","user":"Rany","Payment Date":"6/24/2023","Payment":"Rupiah","Payment method":"maestro"},
    {"Payment id":11,"Item id":11,"Item name":"Nial","user":"Kaye","Payment Date":"6/29/2023","Payment":"Dollar","Payment method":"mastercard"},
    {"Payment id":12,"Item id":12,"Item name":"Corinna","user":"Ruddell","Payment Date":"8/24/2023","Payment":"Baht","Payment method":"jcb"},
    {"Payment id":13,"Item id":13,"Item name":"Bank","user":"Mcimmie","Payment Date":"8/10/2023","Payment":"Shekel","Payment method":"jcb"},
    {"Payment id":14,"Item id":14,"Item name":"Jacki","user":"Gauthorpp","Payment Date":"1/11/2024","Payment":"Krona","Payment method":"jcb"},
    {"Payment id":15,"Item id":15,"Item name":"Kerianne","user":"Klulik","Payment Date":"2/22/2024","Payment":"Dollar","Payment method":"maestro"},
    {"Payment id":16,"Item id":16,"Item name":"Tabb","user":"Elcy","Payment Date":"2/19/2024","Payment":"Euro","Payment method":"jcb"},
    {"Payment id":17,"Item id":17,"Item name":"Vikky","user":"Kemston","Payment Date":"6/28/2023","Payment":"Ringgit","Payment method":"mastercard"},
    {"Payment id":18,"Item id":18,"Item name":"Cecilla","user":"Vearnals","Payment Date":"9/15/2023","Payment":"Peso","Payment method":"mastercard"},
    {"Payment id":19,"Item id":19,"Item name":"Dede","user":"Basley","Payment Date":"11/15/2023","Payment":"Zloty","Payment method":"jcb"},
    {"Payment id":20,"Item id":20,"Item name":"Brandais","user":"Meneur","Payment Date":"12/30/2023","Payment":"Rupiah","Payment method":"mastercard"}]
  };

  //searchbar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
//data filtering
  const filteredData = GET.tablesdata.filter(row => {
    const matchesSearchTerm = row["Item name"].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? isSameDay(new Date(row["Payment Date"]), selectedDate) : true;
    return matchesSearchTerm && matchesDate;
  });

  const handleRowClick = (id: string) => {
    // Handle row click 
    // rendering the Table component
  };


  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const pageNumbers = Math.ceil(filteredData.length / itemsPerPage);

  // Data mapping
  const tableheading = "h-12 px-2 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]";

  const tableRows = currentItems.map((row, rowIndex) => (
    <tr key={row["Payment id"]} className="border-2">
      {Object.values(row).map((value, colIndex) => (
        <td className="p-1 text-center text-xs sm:text-sm" key={colIndex}>{value}</td>
      ))}
      <td className={tableheading}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-2 items-center shadow-lg rounded-lg focus:border-none">
              {/* <span className="sr-only">Open menu</span> */}
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
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
    <div className="h-screen  tb:w-screen  pt-0 pb-16 w-[65vw]">
      <div className="flex flex-col pt-5 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold">Payments</h1>
          </div>
          <div className="mt-4 sm:mt-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full sm:w-[280px] justify-start text-left font-normal",
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
        <div className="flex flex-col sm:flex-row justify-between mt-10">
          <input type="text" placeholder="Search by Item Name ..." value={searchTerm} onChange={handleSearchChange} className="p-2 w-full sm:w-1/3 mb-4 sm:mb-0 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          <Button className='w-full sm:w-auto' variant="outline">Columns</Button>
        </div>
      </div>

      <div className="flex overflow-x-auto shadow-lg  rounded-xl mt-4">
        <table className="border-2  w-full rounded-xl">
          <thead className="border-2 rounded-md">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className={tableheading}>Payment ID</th>
              <th className={tableheading}>Item ID</th>
              <th className={tableheading}>Item Name</th>
              <th className={tableheading}>User</th>
              <th className={tableheading}>Payment Date</th>
              <th className={tableheading}>Payment</th>
              <th className={tableheading}>Payment method</th>
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
    </div>
  );
}