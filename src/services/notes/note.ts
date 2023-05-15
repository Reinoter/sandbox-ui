/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import http, { fetcher } from "..";
import { NewNote } from "./note.interface";

export function getNotes() {
  const { data, error, isLoading } = useSWR(`/notes`, fetcher);
  return {
    notes: data,
    isLoading,
    isError: error,
  };
}

export function createNote(note: NewNote) {
  return http.post("/notes", note);
}
