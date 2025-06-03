import { PageLayout } from "@/components/layout/page-layout";
import NoteList from "@/components/note/note-list";
import React from "react";

export default function Page() {
  return (
    <PageLayout title="Column">
      <div className="py-10">
        <NoteList />
      </div>
    </PageLayout>
  );
}
