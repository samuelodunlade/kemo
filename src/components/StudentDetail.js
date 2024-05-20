
const StudentDetail = ({student}) => {


    return (
            <tr key={student.sn}>
                <td>{student.sn}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
            </tr>

    )
}

export default StudentDetail;