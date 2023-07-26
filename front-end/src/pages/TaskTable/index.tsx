
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableHeader, TableRow, LN, But, TableData, TableCheckbox, BTNSS, BTN, LogoImg, InnerDiv, LI, HR} from './styles';
import { Label } from '../DataTables/styles';
import Logo from '../../assets/filter.svg';
import faker from 'faker'; // import the faker library


interface Data {
  id: number;
  name: string;
  status: string; 
  duedate: string;
  assignedto: string;
  tags: string;
  priority: string;
}

const APIDataTable = () => {
    const [data, setData] = useState<Data[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [sortColumn, setSortColumn] = useState<'name' | 'status' | 'duedate' | 'assignedto' | 'tags' | 'priority'>(
      'name'
    );
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    const handleSort = (column: 'name' | 'status' | 'duedate' | 'assignedto' | 'tags' | 'priority') => {
      setSortColumn(column);
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      setData(
        [...data].sort((a, b) =>
          sortDirection === 'asc' ? a[sortColumn].localeCompare(b[sortColumn]) : b[sortColumn].localeCompare(a[sortColumn])
        )
      );
    };
  
    const handleSelect = (id: number) => {
      const index = selectedIds.indexOf(id);
      if (index === -1) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    };
  
    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1); // Reset the current page to 1 when the items per page changes
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data
      .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(startIndex, endIndex);
  
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const newData = response.data.slice(0, 15).map((item: any) => ({
            id: item.id,
            name: faker.name.findName(), // generate a random name using faker library
            status: item.completed ? 'Completed' : 'Pending',
            duedate: '2023-05-10', // example due date
            assignedto: faker.name.findName(), // generate a random name using faker library
            tags: 'Tag 1, Tag 2', // example tags
            priority: 'High', // example priority
          }));
          setData(newData);
        };
      
        fetchData();
      }, []);
  return (
    <Container>
            <header>
                    <BTNSS><LogoImg src={Logo} alt="Logo Application"/></BTNSS>
                    {/* <BTNSS onClick={handleNavigation}>TASK OVERVIEW</BTNSS> */}                               
            <div>
                <InnerDiv style={{border:"2px",
                                width:"100%",
                                maxWidth:"1300px",
                                height:"100px",
                                borderRadius:"5px",
                                backgroundColor:"white",
                                marginBottom:"10px"}}>
                    <h3 style={{marginLeft:"15px", paddingTop:"15px", }}>Customer Summary</h3>

                    <ul style={{paddingLeft:"70px"}}>
                        <LI>13 Total Customer</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#16FF00"}}>6 Active Customers</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#FF1E1E"}}>7 Inactive Customers</LI>
                        <LI><HR/></LI>
                        <LI style={{color:"#0077b6"}}>14 Active Contacts</LI>
                        <LI><HR/></LI>
                        <LI>0 Contacts Logged</LI>
                    </ul>
                </InnerDiv>
            </div>

            </header>

            <Label style={{ backgroundColor:"white"}}>
                   <br />
            <div style={{ margin:"10px"}}>
            Show  {/* SHOW ITEM PER PAGE */}
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value="10">10</option>
            <option value="15">20</option>
            <option value="23">25</option>
            <option value="30">30</option>
            </select>
            {/* items per page */}

            <BTN style={{marginLeft:"5px"}}>Export</BTN>
                        <BTN>Bulk Actions</BTN>
                        <BTN>Icon</BTN>
                     
                        <input type="text" style={{border:"2px solid", padding:"6px", float:"right", marginTop:"7px", marginLeft:"5px"}} placeholder="Search.." name="search2"/>
                        <But type="submit">Submit</But>
                               
        </div>
            </Label>
         
        
        <br />
           
         <Table>
            <thead>
            <TableRow>
                <TableHeader>
                <TableCheckbox checked={selectedIds.length === currentData.length} onChange={() => {
                    if (selectedIds.length === currentData.length) {
                    setSelectedIds([]);
                    } else {
                    setSelectedIds(currentData.map((item) => item.id));
                    }
                }} />
                </TableHeader>
                <TableHeader>#</TableHeader>
            <TableHeader onClick={() => handleSort('name')}>
                Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
                </TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Due Date</TableHeader>
                <TableHeader>Assigned to</TableHeader>
            <TableHeader>Tags</TableHeader>
            <TableHeader>Priority</TableHeader>
            </TableRow>
        </thead>
        <tbody>
            {data.map((item) => (
            <TableRow key={item.id}>
                <TableData>
                <TableCheckbox checked={selectedIds.includes(item.id)} onChange={() => handleSelect(item.id)} />
                </TableData>
                <TableData>{item.id}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.status}</TableData>
                <TableData>{item.duedate}</TableData>
                <TableData>{item.assignedto}</TableData>
                <TableData>{item.tags}</TableData>
                <TableData>{item.priority}</TableData>
            </TableRow>
            ))}
        </tbody>
        </Table>
    
        <div style={{margin:"10px"}}>
             <span style={{fontSize:"15px",color:"#362FD9"}}>Showing 1 to 6 of 6 entries</span>
             <div style={{float:"right"}}>
                 <a style={{textDecoration:"None"}} href="">Previous</a>
                 <span style={{margin:"10px", border:"1px", color:"white", padding:"5px", borderRadius:"20px", backgroundColor:"#362FD9"}}>1</span>
                 <a style={{textDecoration:"None"}} href="">Next</a>   
              </div>
        </div>
        
    </Container>
       
  );
};

export default APIDataTable;
