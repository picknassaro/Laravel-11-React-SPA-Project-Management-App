import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PageSectionCard from "@/Components/PageSectionCard";
import Table from "@/Components/Table";
import TableCellTruncated from "@/Components/TableCellTruncated";
import { User } from "@/types/index";
import { Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

export default function Index({
    users,
    nextPage,
    previousPage,
}: {
    users: {
        data: User[];
    };
    nextPage: string | null;
    previousPage: string | null;
}) {
    return (
        <AuthenticatedLayout header="All Projects">
            <Head title="All Projects" />
            <Pagination nextPage={nextPage} previousPage={previousPage} />
            <PageSectionCard
                className="overflow-x-scroll"
                noPadding={true}
                noBg={true}
                noShadow={true}
            >
                <Table columns={["Name"]}>
                    {users.data.map((user) => (
                        <tr
                            key={user.id}
                            className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                        >
                            <TableCellTruncated>
                                {user.first_name} {user.last_name}
                            </TableCellTruncated>
                        </tr>
                    ))}
                </Table>
            </PageSectionCard>
            <Pagination nextPage={nextPage} previousPage={previousPage} />
        </AuthenticatedLayout>
    );
}
