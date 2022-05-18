import { makeStyles,styled } from "@mui/styles";

export interface MyLibraryProps {
    header: React.ReactNode;
    footer: React.ReactNode,
    body: React.ReactNode;
}

let useStyles = makeStyles({
    test: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

let Correction= styled("div")({
    paddingLeft:165,
 })
    

export const MyLibrary = (props: MyLibraryProps) => {
    let {header, footer, body} = props
    let styles = useStyles()
    return (
        <div className={styles.test}>
            {header}
            <Correction>{body}</Correction>
            {footer}
        </div>
    )
}