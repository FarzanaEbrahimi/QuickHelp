import {
  FileText,
  ExternalLink,
  CheckCircle2,
  Clock3,
} from "lucide-react";


function DocumentsTable({
  documents,
}) {


  return (

    <section
      className="
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2
            className="
              text-2xl
              font-black
              text-slate-900
            "
          >
            Uploaded Documents
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your AI knowledge files
          </p>

        </div>


        <div
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-bold
            text-blue-700
          "
        >
          {documents.length} Files
        </div>


      </div>



      {documents.length === 0 ? (

        <div
          className="
            rounded-3xl
            bg-slate-50
            p-10
            text-center
          "
        >

          <FileText
            className="
              mx-auto
              h-12
              w-12
              text-slate-300
            "
          />

          <p
            className="
              mt-4
              text-slate-500
            "
          >
            No documents uploaded yet.
          </p>

        </div>


      ) : (


        <div
          className="
            overflow-x-auto
          "
        >

          <table
            className="
              w-full
              text-left
            "
          >

            <thead>

              <tr
                className="
                  border-b
                  border-slate-200
                  text-sm
                  text-slate-500
                "
              >

                <th className="pb-4">
                  Document
                </th>

                <th className="pb-4">
                  Status
                </th>

                <th className="pb-4 text-right">
                  Action
                </th>

              </tr>

            </thead>



            <tbody>

              {documents.map((doc)=>(


                <tr
                  key={doc.id}
                  className="
                    border-b
                    border-slate-100
                    transition
                    hover:bg-slate-50
                  "
                >

                  <td
                    className="
                      py-5
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-blue-100
                        "
                      >

                        <FileText
                          className="
                            h-6
                            w-6
                            text-blue-600
                          "
                        />

                      </div>


                      <div>

                        <p
                          className="
                            font-bold
                            text-slate-900
                          "
                        >
                          {doc.title}
                        </p>


                        <p
                          className="
                            text-sm
                            text-slate-500
                          "
                        >
                          AI Knowledge File
                        </p>


                      </div>


                    </div>


                  </td>




                  <td>


                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-emerald-100
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-emerald-700
                      "
                    >

                      <CheckCircle2 className="h-4 w-4" />

                      Ready

                    </span>


                  </td>




                  <td
                    className="
                      text-right
                    "
                  >

                    <a
                      href={doc.content}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-900
                        px-4
                        py-2
                        text-sm
                        font-bold
                        text-white
                        transition
                        hover:bg-blue-600
                      "
                    >

                      Open

                      <ExternalLink className="h-4 w-4"/>

                    </a>


                  </td>


                </tr>


              ))}


            </tbody>


          </table>


        </div>


      )}


    </section>

  );

}


export default DocumentsTable;