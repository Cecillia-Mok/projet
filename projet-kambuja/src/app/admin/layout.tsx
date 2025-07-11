import AdminWrapper from './adminWrapper';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminWrapper>
            {children}
        </AdminWrapper>
    );
}
