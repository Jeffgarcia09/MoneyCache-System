import { ColumnCont} from "../../components/styles/ColumnCont.styled"
import { StyledSplit } from "../../components/styles/split.styled"
 
type UserData = {
    first_name: string
    middle_name: string
    last_name: string
    dateofBirth: string
    gender: string
}

type RegForm1Props = UserData &{
    updateFields: (fields: Partial<UserData>) => void
}

export function RegForm1({ first_name, middle_name, last_name, dateofBirth, gender, updateFields }: RegForm1Props ){
    return(
        <>
      
            <label>First Name</label>
            <input autoFocus required type="text" value={first_name} onChange={e => updateFields({first_name: e.target.value})} />
            <label>Middle Name</label>
            <input  type="text" value={middle_name} onChange={e => updateFields({middle_name: e.target.value})} />
            <label>Last Name</label>
            <input required type="text" value={last_name} onChange={e => updateFields({last_name: e.target.value})} />
            <ColumnCont>
            <StyledSplit>
            <label>Date of Birth</label>
            <input required type="date" value={dateofBirth} onChange={e => updateFields({dateofBirth: e.target.value})} />
            </StyledSplit>
            <StyledSplit>
            <label>Gender</label>
            <select required value={gender} onChange={e => updateFields({gender: e.target.value})} >
                <option value="N/A">N/A</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </StyledSplit>
            </ColumnCont>
 
            </>
    )
}