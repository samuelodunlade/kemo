import StudentDetail from "./StudentDetail";

export const Student = ({students}) => {
    
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                    {
                        students.map(function(student){


                            return (
                                <StudentDetail student={student} />
                            )

                        })
                        

                    }
            </tbody>


        </table>


    </div>
  )
}
