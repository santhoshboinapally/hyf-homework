-- TASK 4. Creating Hospital Database with 3 tables.
CREATE Table doctor (
    docid INT(10) UNSIGNED AUTO_INCREMENT,
    name VARCHAR(255), specialization VARCHAR(255),
    CONSTRAINT pk_docid PRIMARY KEY (docid)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  CREATE Table patient(
  id INT(10) UNSIGNED AUTO_INCREMENT,
  docid INT(10) UNSIGNED NOT NULL,
  name VARCHAR (255),
  insurance VARCHAR(255),
  dateadmitted DATETIME,
  datecheckedout DATETIME,
  CONSTRAINT pk_id PRIMARY KEY (id),
  CONSTRAINT fk_doc_id FOREIGN KEY (docid) REFERENCES doctor(docid)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  CREATE Table test(
    id INT(10) UNSIGNED AUTO_INCREMENT,
    docid INT(10) UNSIGNED,
    patientid INT(10) UNSIGNED,
    name VARCHAR(255),
    testdate DATETIME,
    result VARCHAR(255),
    CONSTRAINT pk_testid PRIMARY KEY (id),
    CONSTRAINT fk_docid_test FOREIGN KEY (docid) REFERENCES doctor(docid),
    CONSTRAINT fk_patientid FOREIGN KEY (patientid) REFERENCES patient(id))
    ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;