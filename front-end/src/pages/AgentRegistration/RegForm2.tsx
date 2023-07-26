import { ColumnCont } from "../../components/styles/ColumnCont.styled"
import { StyledInbalance } from "../../components/styles/InbalanceRow"
import { StyledSplit } from "../../components/styles/split.styled"

type UserAccount = {
    email: string
    phone: string
    street: string
    zipcode: string
    city: string
    province: string
    password: string
}

type RegForm2Props = UserAccount & {
    updateFields: (fields: Partial<UserAccount>) => void
}

export function RegForm2({ email, phone, street, zipcode, city, province, password, updateFields }: RegForm2Props){
    return(
        <>
            <label>Email</label>
            <input type="email" autoFocus required value={email} onChange={e => updateFields({email: e.target.value})} />
            <label>Phone Number</label>
            <input type="number" required value={phone} onChange={e => updateFields({phone: e.target.value})} />
            <ColumnCont>
            <StyledInbalance>
            <StyledSplit>
            <label>Street/Barangay</label>
            <input type="text" required value={street} onChange={e => updateFields({street: e.target.value})} />
            </StyledSplit>
            <StyledSplit>
            <label placeholder="zip">Zip Code</label>
            <input type="number" required value={zipcode} onChange={e => updateFields({zipcode: e.target.value})} />
            </StyledSplit>
            </StyledInbalance>
            </ColumnCont>
            <ColumnCont>
            <StyledSplit>
            <label>City</label>
            <input type="text" required value={city} onChange={e => updateFields({city: e.target.value})} />
            </StyledSplit>
            <StyledSplit>
            <label>Province</label>
            <input type="text" required value={province} onChange={e => updateFields({province: e.target.value})} />
            </StyledSplit>
            </ColumnCont>
            <label>Password</label>
            <input type="password" required value={password} onChange={e => updateFields({password: e.target.value})} />
            </>
    )
}